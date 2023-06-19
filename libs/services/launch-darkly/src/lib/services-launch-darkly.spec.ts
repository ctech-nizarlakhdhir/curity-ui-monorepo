import { servicesLaunchDarkly } from './services-launch-darkly';

describe('servicesLaunchDarkly', () => {
  it('should work', () => {
    expect(servicesLaunchDarkly()).toEqual('services-launch-darkly');
  });
});
