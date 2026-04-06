import home from '../../assets/background-home-desktop.jpg'
import '../Home/Home.css'
import { Box } from '@mui/material'

export function Home() {
    return (
        <>
            <Box
                sx={{
                    height: "100vh",
                    backgroundImage: `url(${home})`,
                    backgroundSize: "cover"
                }}
            />
        </>
    )
}