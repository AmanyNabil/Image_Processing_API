import resizeImage from '../../modules/image';

import path from 'path';
describe('Suite ResizeImage', () => {
  // it(`resizeImage with return the thumb path`, async () => {
  //   return expectAsync(
  //     await resizeImage('fjord', 300, 200)
  //       .then((data) =>
  //         expect(data).toEqual(path.resolve('./thumbs/fjord_w300_h200.jpg'))
  //       )
  //       .catch((err) => expect(err).toThrowError(err))
  //   );
  // });

  it(`resizeImage with  image`, async () => {
    return expectAsync(resizeImage('fjord', 300, 200)).toBeResolvedTo(
      path.resolve('./thumbs/fjord_w300_h200.jpg')
    );
  });

  it(`resizeImage with notfound image must throw error`, () => {
    return expectAsync(
      resizeImage('testName', 300, 200)
    ).toBeRejectedWithError();
  });

  it(`resizeImage with negative width image must throw error`, () => {
    return expectAsync(
      resizeImage('testName', -300, 200)
    ).toBeRejectedWithError();
  });
});
