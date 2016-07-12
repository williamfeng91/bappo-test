import _ from 'lodash';
import Application from '../models/applications';

/**
 * List
 */
export function all(req, res) {
  Application.find({}).exec((err, applications) => {
    if (err) {
      console.log('Error in first query');
      return res.status(500).send('Something went wrong getting the data');
    }

    return res.json(applications);
  });
}

/**
 * Add an application
 */
export function add(req, res) {
  Application.create(req.body, (err) => {
    if (err) {
      console.log(err);
      return res.status(400).send(err);
    }

    return res.status(200).send('OK');
  });
}

// /**
//  * Update a application
//  */
// export function update(req, res) {
//   const query = { id: req.params.id };
//   const isIncrement = req.body.isIncrement;
//   const isFull = req.body.isFull;
//   const omitKeys = ['id', '_id', '_v', 'isIncrement', 'isFull'];
//   const data = _.omit(req.body, omitKeys);

//   if (isFull) {
//     Application.findOneAndUpdate(query, data, (err) => {
//       if (err) {
//         console.log('Error on save!');
//         return res.status(500).send('We failed to save for some reason');
//       }

//       return res.status(200).send('Updated successfully');
//     });
//   } else {
//     Application.findOneAndUpdate(query, { $inc: { count: isIncrement ? 1 : -1 } }, (err) => {
//       if (err) {
//         console.log('Error on save!');
//         return res.status(500).send('We failed to save for some reason');
//       }

//       return res.status(200).send('Updated successfully');
//     });
//   }
// }

// /**
//  * Remove a application
//  */
// export function remove(req, res) {
//   const query = { id: req.params.id };
//   Application.findOneAndRemove(query, (err) => {
//     if (err) {
//       console.log('Error on delete');
//       return res.status(500).send('We failed to delete for some reason');
//     }

//     return res.status(200).send('Removed Successfully');
//   });
// }

export default {
  all,
  add,
  // update,
  // remove
};
