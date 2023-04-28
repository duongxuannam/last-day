import { Router } from 'express';
import sharp from 'sharp';

const routes = Router();


routes.get('/', async (req, res) => {
  const list = [
    { name: 'PHP' },
    { name: 'Ruby' },
    { name: 'Java' },
    { name: 'Python' },
    { name: 'dotNet' },
    { name: 'C#' },
    { name: 'Swift' },
    { name: 'Pascal' }
  ];
  res.render('index', { title: 'Demo Ejs', list: list });
});

routes.get("/call/:room", (req, res) => {
  res.render("room", { roomId: req.param.room });
});

routes.get("/muonchet", (req, res) => {
  res.send('aaaaa');
});

const sliptImage = async () => {
  const COL_LENGTH = 4;
  const ROW_LENGTH = 5;
  const IMAGE_WIDTH = 1600;
  const IMAGE_HEIGHT = IMAGE_WIDTH * 1.25;
  const CHUNKS_SIZE = COL_LENGTH * ROW_LENGTH;
  const CHUNK_SIZE = IMAGE_HEIGHT / ROW_LENGTH;

  try {
    const image = await sharp('./ngiu.jpg').resize({ height: IMAGE_HEIGHT, width: IMAGE_WIDTH, fit: 'fill' })
      .toBuffer();
    // .metadata((data) => console.log('data', data) );
    // const metadata = await secondImage.metadata();
    // const {width, height} = metadata;

    // console.log('meata', meta);
    // console.log('iamge', await image.metadata());
    // const metadata = await image.metadata();
    // console.log('mede', metadata, image);
    for (let index = 0; index < CHUNKS_SIZE; index++) {
    const secondImage = await sharp(image);

      const currentIndex = index + 1;
      // if (index > 1) return;
      // let left, top;
      // if (index === 0) {
      //   left = 0;
      //   top = 0;
      // }
      const currentRow = Math.ceil(currentIndex / COL_LENGTH);
      const currentColumn = currentIndex % COL_LENGTH === 0 ? COL_LENGTH : currentIndex % COL_LENGTH;


      const top = (currentRow * CHUNK_SIZE) - CHUNK_SIZE;
      const left = (currentColumn * CHUNK_SIZE) - CHUNK_SIZE;
      console.log('ua ', currentRow, currentIndex, top, left);
      secondImage.extract({ left, top, width: CHUNK_SIZE, height: CHUNK_SIZE })
        .toFile(`${currentIndex}.jpg`, function (err) {
          console.log('err', err);
          // Save the top of the image to a file named "top.jpg"
        });

      // }

    }


  } catch (error) {
    console.log('error', error);
  }
};

routes.get('/split-image', (req, res) => {
  sliptImage();
  return res.send('ok');
});

export default routes;