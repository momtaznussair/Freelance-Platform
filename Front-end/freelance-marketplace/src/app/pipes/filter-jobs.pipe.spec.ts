import { filterJobs } from './filter-jobs.pipe';

describe('filterJobs', () => {
  it('create an instance', () => {
    const pipe = new filterJobs();
    expect(pipe).toBeTruthy();
  });
});
