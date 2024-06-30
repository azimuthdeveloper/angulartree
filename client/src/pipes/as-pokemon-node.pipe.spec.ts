import { AsPokemonNodePipe } from './as-pokemon-node.pipe';

describe('AsPokemonNodePipe', () => {
  it('create an instance', () => {
    const pipe = new AsPokemonNodePipe();
    expect(pipe).toBeTruthy();
  });
});
