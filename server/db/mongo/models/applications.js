/**
 * Schema Definitions
 *
 */
import mongoose from 'mongoose';

const ApplicationSchema = new mongoose.Schema({
  name: String
});

// Compiles the schema into a model, opening (or creating, if
//  nonexistent) the 'Application' collection in the MongoDB database
export default mongoose.model('Application', ApplicationSchema);

