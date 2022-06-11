import { Schema, model, connect } from 'mongoose';

interface IWork {
  title: string;
  excerpt: string;
  description: string;
  techs: Array<{
    key: string;
    name: string;
  }>;
  colors: Array<{
    key: string;
    name: string;
  }>;
}

const workSchema = new Schema<IWork>({
  title: {
    type: String,
    required: [true, 'Provide a title for the work'],
    trim: true,
    maxLength: [100, 'Work title cannot exceed 100 characters'],
  },
  excerpt: {
    type: String,
    required: [true, 'Provide an excerpt for the work'],
    trim: true,
    maxLength: [200, 'Work title cannot exceed 200 characters'],
  },
  description: {
    type: String,
    required: [true, 'Provider a description for the work'],
  },
  techs: [
    {
      key: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
    },
  ],
  colors: [
    {
      key: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
    },
  ],
});

const Work = model<IWork>('Work', workSchema);
