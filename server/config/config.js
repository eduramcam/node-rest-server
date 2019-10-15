// =================
// puerto
// =================
process.env.PORT = process.env.PORT || 3001;

// =================
// puerto
// =================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cofe';
} else {
    urlDB = 'mongodb+srv://cofe:iCz1tVGWnSyvlQQs@cluster0-43eit.mongodb.net/cafe';
}

process.env.URLDB = urlDB;