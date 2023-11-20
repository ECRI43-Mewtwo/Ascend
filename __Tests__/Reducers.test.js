describe('Ascend Reducers', () => {
  let state;

  beforeEach(() => {
    state = {
      status: 'Open',
    };
  });

  test('Update HomePage State', () => {
    const action = {
      status: 'Rejected',
    };
    const newState = reducer(state, action);
    expect(newState.status).toEqual('Rejected');
  });
});
