'use strict';
import users from './users.js';
// //////////////////////////////////////////////////////////////////////////////////////
// * TASK 1
const getUserNames = users => {
  return users.map(users => users.name);
};
console.log(getUserNames(users));
const getUserNames = users.map(users => users.name);
console.log(getUserNames);
//////////////////////////////////////////////////////////////////////////////////////
// * TASK 2
const getUsersWithEyeColor = (users, color) => {
  return users
    .filter(users => users.eyeColor === color)
    .map(usres => usres.name);
};
console.log(getUsersWithEyeColor(users, 'blue'));
// //////////////////////////////////////////////////////////////////////////////////////
// * TASK 3
const getUsersWithGender = (users, gender) => {
  return users
    .filter(users => users.gender === gender)
    .map(usres => usres.name);
};
console.log(getUsersWithGender(users, 'male'));
// //////////////////////////////////////////////////////////////////////////////////////
// * TASK 4
const getInactiveUsers = users => {
  return users.filter(users => !users.isActive).map(users => users.name);
};
console.log(getInactiveUsers(users));
const getInactiveUsers = users
  .filter(users => !users.isActive)
  .map(users => users.name);
console.log(getInactiveUsers);
// //////////////////////////////////////////////////////////////////////////////////////
// * TASK 5
const getUserWithEmail = (users, email) => {
  return users.find(users => users.email === email);
};
console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}
// //////////////////////////////////////////////////////////////////////////////////////
// * TASK 6
const getUsersWithAge = (users, min, max) => {
  return users.filter(users => users.age > min && users.age < max);
};
console.log(getUsersWithAge(users, 20, 30));
console.log(getUsersWithAge(users, 30, 40));
// // //////////////////////////////////////////////////////////////////////////////////////
// * TASK 7
const calculateTotalBalance = users => {
  return users.reduce((total, user) => total + user.balance, 0);
};
console.log(calculateTotalBalance(users)); // 20916
// //////////////////////////////////////////////////////////////////////////////////////
// * TASK 8
const getUsersWithFriend = (users, friendName) => {
  return users
    .filter(users => users['friends'].includes(friendName))
    .map(users => users.name);
};
console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]
// //////////////////////////////////////////////////////////////////////////////////////
// * TASK 9
const getNamesSortedByFriendsCount = users => {
  return users
    .sort(
      (userMin, userMax) =>
        userMin['friends'].length - userMax['friends'].length,
    )
    .map(users => users.name);
};
console.log(getNamesSortedByFriendsCount(users));
// //////////////////////////////////////////////////////////////////////////////////////
// * TASK 10
const getSortedUniqueSkills = users => {
  const allUserSkills = users.reduce((allUserSkills, user) => {
    allUserSkills.push(...user.skills);
    return allUserSkills;
  }, []);
  const uniqueSkills = [];
  allUserSkills.forEach(skill => {
    if (!uniqueSkills.includes(skill)) {
      uniqueSkills.push(skill);
    }
  });
  return uniqueSkills.sort();
};
console.log(getSortedUniqueSkills(users));