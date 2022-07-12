import path from 'path';
import sharp from 'sharp';

const resizeImage = async (
  imgname: unknown,
  width: unknown,
  height: unknown
): Promise<string> => {
  try {
    await sharp(`./images/${imgname}.jpg`)
      .resize(parseInt(width as string), parseInt(height as string))
      .toFile(`./thumbs/${imgname}_w${width}_h${height}.jpg`);

    const data = await path.resolve(
      `./thumbs/${imgname}_w${width}_h${height}.jpg`
    );
    return data;
  } catch (err) {
    throw new Error(` ${err}`);
  }
};

export default resizeImage;
