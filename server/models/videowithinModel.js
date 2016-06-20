// const db = require('./../db');

// module.exports = {
//   get: (someVideo, cb) => {
//     db.sequelize.query(
//       `SELECT * FROM Video LEFT JOIN [] ON ST_DWithin(${user.latitude}, ${user.longitude}, 2000)`;
//     )
//       .then(video => cb(null, video))
//       .catch(cb);
//   }
// };
      // "SELECT DISTINCT ON (s.gid) s.gid, \
      //  s.school_name, s.the_geom, h.hospital_name \
      //  FROM schools s LEFT JOIN hospitals h ON \
      //  ST_DWithin(s.the_geom, h.the_geom, 3000) \
      //  ORDER BY s.gid, ST_Distance(s.the_geom, \
      //  h.the_geom);"
