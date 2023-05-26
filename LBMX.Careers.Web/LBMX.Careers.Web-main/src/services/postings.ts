import { BaseForm } from '.';
import { get, post } from './http-methods';

export interface Posting extends BaseForm {
  __v: number;
  //_id: string;
  blurb: string;
  closingDate: string;
  frameworks: string[];
  jobCode: string;
  languages: string[];
  postingId: string;
  title: string;
  createdAt: string;
  updatedAt: string;
}

const dispatcher = {
  createPosting: (
    body: object,
    successCallback?: (data: any) => void,
    errorCallback?: (error: any) => void
  ) => post(`/api/v1/postings`, body, successCallback, errorCallback),

  getPostings: (
    successCallback?: (data: any) => void,
    errorCallback?: (error: any) => void
  ) => get(`/api/v1/postings`, successCallback, errorCallback),

  getPosting: (
    id: string,
    successCallback?: (data: any) => void,
    errorCallback?: (error: any) => void
  ) => get(`/api/v1/postings/${id}`, successCallback, errorCallback),

  updatePosting: (
    //id: string,
    postingId:string,
    body: object,
    successCallback?: (data: any) => void,
    errorCallback?: (error: any) => void
  ) => post(`/api/v1/postings/${postingId}`, body, successCallback, errorCallback),
};

export default dispatcher;
