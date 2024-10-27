import mongoose, { Schema, Document } from 'mongoose';

interface IEventLog extends Document {
  action: string;
  productId: string;
  timestamp: Date;
}

const EventLogSchema: Schema = new Schema({
  action: { type: String, required: true },
  productId: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

export default mongoose.model<IEventLog>('EventLog', EventLogSchema);
