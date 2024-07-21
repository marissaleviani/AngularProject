import { Topics } from './topics';

describe('Topics', () => {
  it('should create an instance', () => {
    const topic = new Topics('Sample Writter', 2, 1, ['40478903'], 2, 'Sample Text', 1716641449, 'Sample Title', 'story');
    expect(topic).toBeTruthy();
  });
});
