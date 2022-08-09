const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagsdb = await Tag.findAll({
      
      include: [{ model: Tag }, { model: Product }],
    });
    res.status(200).json(tagsdb);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`  try {
    try{
    const tagsdb = await Tag.findByPk(req.params.id, {
      // Add Book as a second model to JOIN with
      include: [{ model: Tag }, { model: Product }],
    });

    if (!tagsdb) {
      res.status(404).json({ message: 'No Tag found with that id!' });
      return;
    }

    res.status(200).json(tagsdb);
  } catch (err) {
    res.status(500).json(err);
  }
  // be sure to include its associated Product data
  // look up routers in ORM 24 of class repo 
});

router.post('/', async (req, res) => {
  console.log(req.body)
  try {
    const tagsdb = await Tag.create({
      tag_name: req.body.tag_name,
      
    }); 
    
    res.status(200).json(tagsdb);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Need to work on tag put below

// router.put('/:id', (req, res) => {
//   // update product data
//   Tag.update(req.body, {
//     where: {
//       id: req.params.id,
//     },
//   })
//     .then((tag) => {
//       // find all associated tags from ProductTag
//       return Tag.findAll({ where: { tag_id: req.params.id } });
//     })
//     .then((tag) => {
//       // get list of current tag_ids
//       const tagdbid = tag.map(({ tag_id }) => tag_id);
//       // create filtered list of new tag_ids
//       const newTags = req.body.tagIds
//         .filter((tag_id) => !Ids.includes(tag_id))
//         .map((tag_id) => {
//           return {
//             tag_id: req.params.id,
//             tag_id,
//           };
//         });
//       // figure out which ones to remove
//       const productTagsToRemove = tags
//         .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
//         .map(({ id }) => id);

//       // run both actions
//       return Promise.all([
//         ProductTag.destroy({ where: { id: productTagsToRemove } }),
//         ProductTag.bulkCreate(newProductTags),
//       ]);
//     })
//     .then((updatedProductTags) => res.json(updatedProductTags))
//     .catch((err) => {
//       // console.log(err);
//       res.status(400).json(err);
//     });
// });

// router.delete('/:id', (req, res) => {
//   // delete on tag by its `id` value
// });

module.exports = router;