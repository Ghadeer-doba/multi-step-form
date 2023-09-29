import React from 'react';
import {Typography,Card,CardContent,Stack,} from '@mui/material';


export default function ReviewPages({ formValues }) {

    const reviewItems = [
        { label: 'Full Name', field: 'firstName' },
        { label: 'Email Address', field: 'email' },
        { label: 'Phone Number', field: 'phone' },
        { label: 'Link', field: 'link' },
        { label: 'Skill Level', field: 'picked' },
        { label: 'Challenge Preference', field: 'checked' },
      ];
  return (
    <>
        <Typography 
            variant="h2" 
            sx={{ fontSize:20,fontFamily: 'Roboto Slab',fontWeight:'500'  }} 
            m={2}  
        >
        Review and Confirm
        </Typography>

        <Typography  
        sx={{ color: 'text.secondary',fontSize:12,fontFamily: 'Roboto Slab',fontWeight:'400'  }} 
        m={3} 
        mt={0}  
        >
        Please review yor information to make sure everything is accurate
        </Typography>

        <Stack spacing={1}
    
        direction={{ xs: 'column', sm: 'row' }}
        useFlexGap 
        flexWrap="wrap"
        mb={4} 
        >

{reviewItems.map((item) => (
          <Card
            key={item.field}
            sx={{ background: '#e8f2fc', width: 150, height: 60 }}
          >
            <CardContent>
              <Typography sx={{ color: 'text.secondary', fontSize: 11 }} mt={-1.5}>
                {item.label}
              </Typography>
              {formValues && (
                <Typography sx={{ fontSize: 13, wordWrap: 'break-word', overflowWrap: 'break-word' }}>
                  {formValues[item.field]}
                </Typography>
              )}
            </CardContent>
          </Card>
        ))}


 
    </Stack>
    </>
  );
}






