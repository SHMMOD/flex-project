export const fetchUserProjects = (userId) => {
  fetch('/api/users/${userId}/projects', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: {
      // firstParam: 'yourValue',
      // secondParam: 'yourOtherValue',
    },
  });
};

export const fetchSingleProject = (id) => {
  fetch('/api/projects/${id}', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: {
      // firstParam: 'yourValue',
      // secondParam: 'yourOtherValue',
    },
  });
};
