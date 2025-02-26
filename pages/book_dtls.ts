import { Response, Request} from 'express';
import Book from '../models/book';
import express from 'express';

const router = express.Router();

/**
 * @route GET /book_dtls
 * @group Book_dtls
 * @returns an array of all authors sorted by family name
 * @returns an error message if no authors were found 
 * or if there was an error processing the request
 */
router.get('/', async (req: Request, res: Response) => {
    try {

        const bookID = req.query.id;

        if (typeof bookID === "string") {
            const data = await Book.getBookDetails(bookID);

            res.status(200).send(data);
        } else {
            console.error('Error processing request:');
            res.send('No authors found');
        }
        
    } catch (error) {
        console.error('Error processing request:', error);
        res.send('No authors found');
    }
});

export default router;
