import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  //baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  projects:any = [
    {
      id: 1,
      title: 'Hello World - Blog',
      desc: '',
      githurl: 'https://abdulhadishah.github.io/Hello-World-Bootstrap-Blog/',
      imgUrl: 'assets/images/Hello World - Blog.png',
    },

    {
      id: 2,
      title: 'Cybertron - Bootstrap Bootcamp Website',
      desc: '',
      githurl: 'https://abdulhadishah.github.io/Cybertron-Bootstrap-Bootcamp-Website/',
      imgUrl: 'assets/images/Cybertron - Bootcamp Website.png',
    },


    {
      id: 3,
      title: 'iLove Food - Resturant Website',
      desc: '',
      githurl: 'https://abdulhadishah.github.io/iLove-Food/',
      imgUrl: 'assets/images/iLove Food - Resturant Website.png',
    },

    {
      id: 4,
      title: 'Amazon - Clone',
      desc: '',
      githurl: 'https://abdulhadishah.github.io/Amazon-Clone/',
      imgUrl: 'assets/images/Amazon - Clone.png',
    },


  ]
  about2 = `Software Developer with 2.5+ years of experience .
  Worked with Software Development Life Cycle(SDLC) and  agile methodologies .
  Expertise in Angular 2+ All versions, React, Javascript,  Node JS and UI with Responsive Designs .
  Have good understanding of Python, Jquery, Bootstrap, MongoDB, Firebase, and MYSQL`

  about = "Lover of innovation and everything related to generate new knowledge.Face problems with a smile and solve them as soon as possible. Very calculated about the time I spend and work I do."
  resumeurl = "https://docs.google.com/document/d/1WODFuhIzQw2AXPsjt6f3rs-EDWhdhT8s89fOTrGRh70/edit?usp=sharing"

  skillsData: any = [
    {
      'id': '1',
      'skill': 'UI/UX',
      'progress': '85%'
    },
    {
      'id': '2',
      'skill': 'MySQL',
      'progress': '80%'
    },
    {
      'id': '3',
      'skill': 'Front-End Development',
      'progress': '75%'
    },
    {
      'id': '4',
      'skill': 'GitHub',
      'progress': '75%'
    },
    {
      'id': '5',
      'skill': 'Android',
      'progress': '75%'
    },
    {
      'id': '6',
      'skill': 'PYTHON',
      'progress': '65%'
    }
  ];


  educationData: any = [
    {
      'id': '1',
      'from_to_year': '2022 - 2025',
      'education': 'Bachelor\'s Degree',
      'stream': 'Bachelor of Engineering',
      'info': ``,
      'institution': 'ADITYA SILVER OAK INSTITUTE OF TECHNOLOGY, AHMEDABAD'
    },
    {
      'id': '2',
      'from_to_year': '2013 - 2015',
      'education': 'Higher Secondary',
      'stream': 'Science and Mathematics',
      'institution': 'GYANDEEEP VIDHYALAYA,AHMEDABAD',
      'info': `The High School was mainly focus on the bases of science, mathematics, and Chemistry
There was also a good base on physics, mathematics and chemistry.
Completed my high school with 78%.`
    },
    {
      'id': '3',
      'from_to_year': '2012 - 2013',
      'education': 'Secondary  School',
      'stream': 'Science and Mathematics',
      'institution': 'GYANDEEEP VIDHYALAYA,AHMEDABAD',
      'info': `The Secondary aims at Maths , English , Science, Social Science, Litrature and Languages.
Completed my Secondary school with 84%.`
    }
  ];
  exprienceData: any = [
    {
      id: 4,
      company: 'Crest Data System',
      location: 'Ahmedabad',
      timeline: 'Aug 2021 to Present',
      role: 'Software Developer',
      work: 'Working as a full stack developer .Responsible for handling the UI in React and Managing the api calls in python Flask.'

    },
    {
      id: 3,
      company: 'Indianic Info Tech',
      location: 'Ahmedabad',
      timeline: 'Feb 2021 to June 2021',
      role: 'Software Developer',
      work: `Technologies : Angular , Node JS , MongoDB .
      Worked on the web application built in Angular for different business and Campaigns .
      Contributed on developing the admin dashboard with different charts and insights for the application.`
    },
  //   {
  //     id: 2,
  //     company: 'Growth99',
  //     location: 'Remote',
  //     timeline: '',
  //     role: 'Frontend  Developer',
  //     work: `Technologies : Angular , Node JS , MongoDB .
  // Worked on the product of Growth99 which allowed other clients to come and integrate our product in their website .
  // Worked on REST Api , Admin Dashboard , Appointment Booking for services and UI of the application .
  // Created sections like templates for email, sms, landing pages, clinic, services, providers and triggers Automation.
  // `
  //   },

    {
      id: 1,
      company: 'Tata Consultancy Services',
      location: 'Gandhinagar and Pune',
      timeline: 'June 2019 - Jan 2021',
      role: 'Assistant System Engineer Trainee',
      work: `Technologies : Angular , JavaSpring Boot , SQL. Apache Solr .

  Project 1 : Worked on uploading two excel sheets with bulk of data and finding the matches for each business .

  Project 2 : Worked on indexing the search results inside the application with bulk of data using Apache Solr and configuring the server with cron jobs and shell scripts .

  Worked on ranking the search results based on various criteria,features and delivering the accurate results based on generated scores.
  `
    },


  ]
  skills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.skillsData;
  }

  getProjects(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.projects;
  }
  education(): Observable<any> {
    // return this.http.get(this.baseUrl + 'education');
    return this.educationData;
  }

  exprience(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.exprienceData;
  }
}
