import { ComponentFactory } from "@angular/core";

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Coordinates;
}

export interface Coordinates {
  lat: string;
  lng: string;
}

export interface Company {
  name: string;
  catchphrase: string;
  bs: string;
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface Comment {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}