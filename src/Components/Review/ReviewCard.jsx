import { Delete } from '@mui/icons-material';
import {
    Avatar, Box, Grid
    , IconButton
} from '@mui/material'
import { red } from '@mui/material/colors';
import Rating from '@mui/material/Rating';

import { Link } from 'react-router-dom';

const ReviewCard = () => {

    return (
        <div className="flex justify-between items-start gap-5">
            <Link to={`/review`}>
                <div className="flex gap-5">
                    <Grid
                        size={{ xs: 1 }}>
                        <Box>
                            <Avatar className="text-white" sx={{ width: 56, height: 56, bgcolor: "#9155FD" }}>
                                H
                            </Avatar>
                        </Box>
                    </Grid
                    >
                    <Grid
                        size={{ xs: 5 }}>
                        <div className="space-y-2">
                            <div>
                                <p className="font-semibold text-lg">Hari</p>
                                <p className="opacity-70">2024-09-27 123:16:07.478333</p>
                            </div>
                        </div>
                        <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                        <p>Value for money product, great product</p>
                        <div>
                            <img className="w-24 h-24 object-cover rounded-lg"
                                src="https://lajreedesigner.com/cdn/shop/files/Aayna-4041_4_900x1350_crop_center@2x.jpg?v=1696051144"
                                alt="no image" />
                        </div>
                    </Grid
                    >
                </div>
            </Link>
            <IconButton className="ml-auto" sx={{ color: red[700] }}>
                <Delete />
            </IconButton>
        </div>
    )
}

export default ReviewCard