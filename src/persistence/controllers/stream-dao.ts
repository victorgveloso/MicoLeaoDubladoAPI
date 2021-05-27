import Stream, { IStream, StreamId } from '../models/stream';

export default class StreamDao {
    /* TODO: The method getByStreamId should be deprecated and replaced by a fancier solution */
    async getByStreamId(streamId: string): Promise<IStream[]> {
        const query = StreamId.toObject(streamId);
        return Stream.find(query).exec();
    }
    async getAll(): Promise<IStream[]> {
        return Stream.find().exec();
    }
    async getByMetaId(metaId: string): Promise<IStream[]> {
        return Stream.find({
            metaId
        }).exec();
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