// import { createReducer, on } from '@ngrx/store';
// import { loadUsersSuccess, loadUserSuccess } from './user.actions';
// import { Users } from 'src/app/domain/users/models/users';

// export interface UserState {
//   users: Users[];
//   user: Users;
//   total: number;
// }

// export const initialState: UserState = {
//   users: [],
//   user: null,
//   total: 0
// };

// export const userReducer = createReducer(
//   initialState,
//   on(loadUsersSuccess, (state, { users, total }) => ({ ...state, users, total })),
//   on(loadUserSuccess, (state, { user }) => ({ ...state, user }))
// );