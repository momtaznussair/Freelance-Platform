import { filterJobs } from './filter-jobs';

describe('filterJobs', () => {
  it('create an instance', () => {
    const pipe = new filterJobs();
    expect(pipe).toBeTruthy();
  });
});
