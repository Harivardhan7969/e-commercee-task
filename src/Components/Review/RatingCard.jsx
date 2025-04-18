import { Box, Grid, LinearProgress, Rating } from '@mui/material'


const RatingCard = () => {
    return (
        <>
            <div>
                <h1 className="font-semibold text-lg pb-4">
                    Review & Ratings
                </h1>
                <div className="border p-5 rounded-md mb-5">


                    <div className="flex items-center space-x-3 pb-10">
                        <Rating
                            name="read-only"
                            value={4.6}
                            precision={0.5}
                            readOnly
                        />

                        <p className="opacity-60">55660 Ratings</p>
                    </div>
                    <Box>
                        <Grid
                            container
                            justifyContent="center"
                            alignItems="center"
                            gap={2}
                        >
                            <Grid xs={2}>
                                <p className="p-0">Excellent</p>
                            </Grid>
                            <Grid xs={7}>
                                <LinearProgress
                                    className=""
                                    sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }}
                                    variant="determinate"
                                    value={40}
                                    color="success"
                                />
                            </Grid>
                            <Grid xs={2}>
                                <p className="opacity-50 p-2">19259</p>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box>
                        <Grid
                            container
                            justifyContent="center"
                            alignItems="center"
                            gap={2}
                        >
                            <Grid xs={2}>
                                <p className="p-0">Very Good</p>
                            </Grid>
                            <Grid xs={7}>
                                <LinearProgress
                                    className=""
                                    sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }}
                                    variant="determinate"
                                    value={30}
                                    color="success"
                                />
                            </Grid>
                            <Grid xs={2}>
                                <p className="opacity-50 p-2">19259</p>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box>
                        <Grid
                            container
                            justifyContent="center"
                            alignItems="center"
                            gap={2}
                        >
                            <Grid xs={2}>
                                <p className="p-0">Good</p>
                            </Grid>
                            <Grid xs={7}>
                                <LinearProgress
                                    className="bg-[#885c0a]"
                                    sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }}
                                    variant="determinate"
                                    value={25}

                                />
                            </Grid>
                            <Grid xs={2}>
                                <p className="opacity-50 p-2">19259</p>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box>
                        <Grid
                            container
                            justifyContent="center"
                            alignItems="center"
                            gap={2}
                        >
                            <Grid xs={2}>
                                <p className="p-0">Avarage</p>
                            </Grid>
                            <Grid xs={7}>
                                <LinearProgress
                                    className=""
                                    sx={{
                                        bgcolor: "#d0d0d0",
                                        borderRadius: 4,
                                        height: 7,
                                        "& .MuiLinearProgress-bar": {
                                            bgcolor: "#885c0a", // stroke color
                                        },
                                    }}
                                    variant="determinate"
                                    value={21}
                                    color="success"
                                />
                            </Grid>
                            <Grid xs={2}>
                                <p className="opacity-50 p-2">19259</p>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box>
                        <Grid
                            container
                            justifyContent="center"
                            alignItems="center"
                            gap={2}
                        >
                            <Grid xs={2}>
                                <p className="p-0">Poor</p>
                            </Grid>
                            <Grid xs={7}>
                                <LinearProgress
                                    className=""
                                    sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }}
                                    variant="determinate"
                                    value={10}
                                    color="error"
                                />
                            </Grid>
                            <Grid xs={2}>
                                <p className="opacity-50 p-2">19259</p>
                            </Grid>
                        </Grid>
                    </Box>


                </div>
            </div>
        </>
    )
}

export default RatingCard