﻿using Microsoft.Extensions.Options;
using MongoDB.Driver;
using Pioneer_Backend.DataAccess;
using Pioneer_Backend.Model;

namespace Pioneer_Backend.Service
{
    public class MemberService
    {
        private readonly IMongoCollection<Member> _memberCollection;

        public MemberService(IOptions<DatabaseSettings> PioneerDatabaseSettings)
        {
            var mongoClient = new MongoClient(
                PioneerDatabaseSettings.Value.ConnectionString);

            var mongoDatabase = mongoClient.GetDatabase(
                (string)PioneerDatabaseSettings.Value.DatabaseName);

            _memberCollection = mongoDatabase.GetCollection<Member>(
                PioneerDatabaseSettings.Value.MembersCollectionName);
        }

        public async Task<List<Member>> GetAsyncAllMembers()
        {
            return await _memberCollection.Find(_ => true).ToListAsync();
        }

        public async Task<Member?> GetAsyncMemberByName(string nameId)
        {
            return await _memberCollection.Find(x => x.NameId == nameId).FirstOrDefaultAsync();
        }
        public Member GetMemberSyncByName(string nameId)
        {
            return _memberCollection.Find(x=>x.NameId== nameId).FirstOrDefault();
        }

        public async Task<Member?> GetAsyncMemberById(string id)
        {
            return await _memberCollection.Find(x => x.MemberId == id).FirstOrDefaultAsync();
        }

        public async Task CreateAsync(Member newMember)
        {
            await _memberCollection.InsertOneAsync(newMember);
        }

        public async Task UpdateAsync(string memberId, Member updatedMember)
        {
            await _memberCollection.ReplaceOneAsync(x => x.MemberId == memberId, updatedMember);
        }

        public async Task RemoveAsync(string id)
        {
            await _memberCollection.DeleteOneAsync(x => x.MemberId == id);
        }
    }
}
