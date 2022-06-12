import * as mongoose from 'mongoose';
import NewsSchema from '../models/newsSchema';

// criando uma collection news no mongoDB
export default mongoose.model('news', NewsSchema);