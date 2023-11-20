describe('Ascend Reducers', () => {
  let state;

  test('Update HomePage State', () => {
    const action = {
      date: 'Tuesday',
      company_name: 'Meta',
      job_title: 'SWE',
      location: 'New York',
      type_of_app: 'Forgot',
    };
    expect(reducer(state, action)).toEqual({
      date: 'Tuesday',
      company_name: 'Meta',
      job_title: 'SWE',
      location: 'New York',
      type_of_app: 'Forgot',
    });
  });
});
