import { shades } from "../../theme";
import { Box, Typography, useTheme } from "@mui/material";

const Footer = () => {
  const {
    palette: { neutral },
  } = useTheme();

  const cursorPointer = { ":hover": { cursor: "pointer" } };
  return (
    <Box mt="70px" p="40px 0" backgroundColor={neutral.light}>
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px,30px,40px)"
      >
        <Box width="clamp(20%,30%,40%)">
          <Typography
            variant="h2"
            fontWeight="bold"
            mb="30px"
            color={shades.secondary[700]}
          >
            AVIRA
          </Typography>
          <p>
            Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec
            rutrum congue leo eget malesuada. Cras ultricies ligula sed magna
            dictum porta. Curabitur aliquet quam id dui posuere blandit.
            Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
            dui.
          </p>
        </Box>
        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            About Us
          </Typography>
          <Typography sx={cursorPointer} mb="30px">
            Careers
          </Typography>
          <Typography sx={cursorPointer} mb="30px">
            Our Stores
          </Typography>
          <Typography sx={cursorPointer} mb="30px">
            Terms & Conditions
          </Typography>
          <Typography sx={cursorPointer} mb="30px">
            Privacy & Policy
          </Typography>
        </Box>
        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Customer Care
          </Typography>
          <Typography sx={cursorPointer} mb="30px">
            Help Center
          </Typography>
          <Typography sx={cursorPointer} mb="30px">
            Track Your Order
          </Typography>
          <Typography sx={cursorPointer} mb="30px">
            Corporate $ Bulk Purchasing
          </Typography>
          <Typography sx={cursorPointer} mb="30px">
            Returns and Refunds
          </Typography>
        </Box>
        <Box width="clamp(20%,25%,30%)">
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Contact Us
          </Typography>
          <Typography sx={cursorPointer} mb="30px">
            Address
          </Typography>
          <Typography sx={cursorPointer} mb="30px">
            Email: example@email.com
          </Typography>
          <Typography sx={cursorPointer} mb="30px">
            223118959
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
