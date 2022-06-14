const { Router } = require('express');
const { randomAndCipher} = require( '../controllers/RandomAndCipher' );
const { Diversifier } = require('../controllers/Diversifier'); 

const router = Router();

module.exports = router;

router.post( '/diversifier', Diversifier);
router.post( '/randomAndCipher',  randomAndCipher );

// ROUTE WITH CLASES
// router.post( '/diversifier', Diversifier );


router.put( '/', (req, res)=>{
    res.json(
        {
            msg: 'put SAM Application'
        }
    )
});
router.delete( '/', (req, res)=>{
    res.json(
        {
            msg: 'delete SAM Application'
        }
    )
});
