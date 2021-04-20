import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaveDataService {

  constructor() { }

  details: Object[] = [
    {
      'username': 'inbarajasekaran@dsrt.in',
      'password': 'DSRT0011',
      'firstname': 'Inba',
      'lastname': 'Rajasekaran',
      'gender': 'male'
    },
    {
      'username': 'test@test.com',
      'password': 'test',
      'firstname': 'Test',
      'lastname': 'test',
      'gender': 'female'
    },
  ];

  // details: [] = [
  //    {
  //     'username': 'inba@dsrt.in',
  //     'firstname': 'inba',
  //     'password': 'inba@dsrt.in'
  //   }
  // ];

}
