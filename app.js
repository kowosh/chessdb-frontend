const express = require('express')
const app = express()
const port = 80

app.use('/dist', express.static('dist'))

app.get('/*', (req, res) => res.send(
    '<!DOCTYPE html>' +
    '<html lang="en">' +
    '<head>' +
    '<meta charset="UTF-8">' +
    '<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
    '<title>Chessdb</title>' +
    '<link rel="stylesheet" href="/dist/chessdb.css">' +
    '</head>' +
    '<body>' +
    '<main id="chessdb"></main>' +
    '<script src="dist/runtime.js"></script>' +
    '<script src="dist/chessdb.js"></script>' +
    '</body>' +
    '</html>'
));

app.listen(port, () => console.log(`ChessDB frontend listening on port ${port}!`))
