//@ts-nocheck

import { Query } from "mongoose";

interface QueryString {
  purpose: string;
  location: string;
  minPrice: string;
  maxPrice: string;
  totalArea: string;
  areaType: string;
  classification: string;
  type: string;
  keyword: string;
  bedrooms: string;
  bathrooms: string;
  page: string;
  [key: string]: any;
}

class ApiFeatures<T> {
  query: Query<T[], T>;
  queryStr: QueryString;

  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  //Search on the basis of name
  search() {
    const searchValue = this.queryStr.location
      ? {
          $or: [
            {
              location: {
                $regex: this.queryStr.location,
                $options: "i",
              },
            },
            {
              city: {
                $regex: this.queryStr.location,
                $options: "i",
              },
            },
          ],
        }
      : {};

    this.query = this.query.find({ ...searchValue });
    return this;
  }

  searchKeyword() {
    const searchValue = this.queryStr.keyword
      ? {
          $or: [
            {
              name: {
                $regex: this.queryStr.keyword,
                $options: "i",
              },
            },
            {
              description: {
                $regex: this.queryStr.keyword,
                $options: "i",
              },
            },
          ],
        }
      : {};

    this.query = this.query.find({ ...searchValue });
    return this;
  }

  //Search user on the basis of email
  searchByEmail() {
    const userEmail = this.queryStr.userEmail
      ? {
          email: {
            $regex: this.queryStr.userEmail,
            $options: "i",
          },
        }
      : {};

    this.query = this.query.find({ ...userEmail });
    return this;
  }

  searchById() {
    var id = this.queryStr._id;

    this.query = this.query.find({ _id: id });

    return this;
  }

  //Filter on basis of category
  filter() {
    const queryCopy = { ...this.queryStr };

    //Removing some fields for category
    const removeFields = [
      "location",
      "page",
      "totalArea",
      "areaType",
      "keyword",
      "maxPrice",
      "minPrice",
      "totalArea",
      "areaType",
    ];

    removeFields.forEach((key) => delete queryCopy[key]);

    //filter for price and rating
    let queryStr = JSON.stringify(queryCopy);
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`);

    const filter = JSON.parse(queryStr);

    if (this.queryStr.maxPrice > 0) {
      this.query = this.query.find({
        "price.askingPrice": { $lte: this.queryStr.maxPrice },
        "price.currency": "PKR",
      });
    }

    if (this.queryStr.minPrice > 0) {
      this.query = this.query.find({
        "price.askingPrice": { $gte: this.queryStr.minPrice },
        "price.currency": "PKR",
      });
    }

    if (this.queryStr.areaType && this.queryStr.totalArea) {
      this.query = this.query.find({
        "area.totalArea": this.queryStr.totalArea,
        "area.type": this.queryStr.areaType,
      });
    }

    this.query = this.query.find(filter);
    // this.query = this.query.find({
    //   "jobTimeline.0.jobTitle": "Finance Manager",
    // });

    return this;
  }

  pagination(resultPerPage) {
    const currentPage = Number(this.queryStr.page) || 1;

    const skip = resultPerPage * (currentPage - 1);

    this.query = this.query.limit(resultPerPage).skip(skip);

    return this;
  }
}

export default ApiFeatures;
