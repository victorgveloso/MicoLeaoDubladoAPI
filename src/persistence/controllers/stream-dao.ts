import Stream, { IStream } from '../models/stream';
/**
 * This class abstracts database operations related to the Stream model
 */
export default class StreamDao {
    async getByStreamId(streamId: string): Promise<IStream[]> {
        return Stream.find({streamId}).exec();
    }
    async getAll(): Promise<IStream[]> {
        return Stream.find().exec();
    }
    async getByMetaId(metaId: string): Promise<IStream[]> {
        return Stream.find({metaId}).exec();
    }
    
    async getByMetaIdAndInfoHash(metaId: string, infoHash: string): Promise<IStream | null> {
        return Stream.findOne({
            metaId,
            infoHash
        }).exec();
    }

    async addIfAbsent(stream: IStream): Promise<IStream> {
        let exists = await this.getByMetaIdAndInfoHash(stream.metaId, stream.infoHash);
        if (exists != null) {
            return exists;
        } else {
            return (new Stream(stream)).save();
        }
        
    }
}