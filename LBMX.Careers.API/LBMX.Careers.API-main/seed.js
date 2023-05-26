const mongoose = require('mongoose');
const JobPostingSchema = require('./schemas/job-posting');
const JobPosting = mongoose.model('posting', JobPostingSchema);
const nextWeek = new Date();
const january = new Date();

const seedId1 = `FS-JD-${january.getFullYear()}-01`;
const seedId2 = `FS-JD-${nextWeek.getFullYear()}-02`;

const seedPostings = [
  {
    postingId: seedId1,
    title: 'Senior Developer',
    blurb:
      'Looking for a senior-level full stack developer familiar with JavaScript, TypeScript, SQL, .NET Core and Angular.',
    jobCode: 'FS-SD',
    languages: ['JavaScript', 'TypeScript', 'SQL'],
    frameworks: ['.NET Core', 'Angular'],
    closingDate: january.setMonth(1),
  },
  {
    postingId: seedId2,
    title: 'Junior Developer',
    blurb:
      'Looking for a full stack developer familiar with JavaScript, TypeScript, MongoDB, Express and React.',
    jobCode: 'FS-JD',
    languages: ['JavaScript', 'TypeScript', 'MongoDB'],
    frameworks: ['Express', 'React'],
    closingDate: nextWeek.setDate(new Date().getDate() + 7),
  },
];

function seed() {
  seedPostings.forEach((seedPosting) => {
    JobPosting.findOne({ postingId: seedId2 }, function (err, posting) {
      if (err) {
        console.log(err);
      } else {
        if (!posting) {
          JobPosting.create(seedPosting, function (err) {
            if (err) {
              console.log(err);
            } else {
              console.log('Database seeded');
            }
          });
        }
      }
    });
  });
}

module.exports = seed;
