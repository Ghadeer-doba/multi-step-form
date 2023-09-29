import React from 'react';
import FormikSteps from './FormikSteps';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { TextField ,
    InputAdornment, 
    RadioGroup, 
    Radio,
    FormControlLabel,
    Typography,
    Card,
    CardContent,
    Box,
    Stack,

   
 } from '@mui/material';

import PhoneIcon from '@mui/icons-material/Phone';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LinkIcon from '@mui/icons-material/Link';
import ReviewPages from './ReviewPages';
import { motion } from "framer-motion";




export default function PersonalInfo() {
  const step1Item = [
    {name:'firstName',type:'text', label: 'Full Name',icon:<PersonIcon sx={{color:"#1976d2",fontSize: 18}} />  },
    {name:'email',type:'email',  label: 'Email Address',icon:<EmailIcon sx={{color:"#1976d2",fontSize: 18}} />  },
    {name:'phone',type:'tel',  label: 'Phone Number',icon:<PhoneIcon sx={{color:"#1976d2",fontSize: 18}} /> },
    {name:'link',type:'url',  label: 'Link',icon:<LinkIcon sx={{color:"#1976d2",fontSize: 18}} />  },

  ];

  const step2Item = [
    {value:"beginner", label: 'Beginner', },
    {value:"intermediate",  label: 'Intermediate', },
    {value:"addvanced", label: 'Addvanced',},
    {value:"expert",  label: 'Expert', },

  ];

  const step3Item = [
    {value:"Html/Css/Js", },
    {value:"ReactJs",  },
    {value:"AngularJS", },
    {value:"Vue.JS",   },

  ];

  const [formValues, setFormValues] = React.useState(null); // Store form values
    


return (
        <Formik
            initialValues={{firstName: '',email: '', phone:'',link:'',picked: '',checked:'',}}
            validationSchema={ Yup.object({
            firstName: Yup.string()
              .max(20, 'Must be 20 characters or less')
              .required('Required'),

            email: Yup.string()
            .email('Invalid email address')
            .required('Required'),

            phone: Yup.string() 
            .matches(/^[0-9\s+]+$/, 'Phone number must contain only digits')
            .min(10, 'Phone number must be at least 10 digits')
            .required('Required'),

            link: Yup.string()
            .url('Invalid URL format')
            .required('Required'),

            picked: Yup.string()
            .required('Required'),

            checked: Yup.string()
            .min(1, 'Select at least one option') 
            .required('required'), 

            })}

            onSubmit={(values,{ setSubmitting }) => {
                setSubmitting(false);
                setFormValues(values);
                // console.log('Form Values:', values);

                }}>
                {formik =>(
<Card  sx={{ width: 500 ,borderRadius: 3, }}>
<CardContent   >

    <Form >
    
    <FormikSteps 
        isSubmitting={formik.isSubmitting} 
        validateField={formik.validateField}
        errors={formik.errors}
        touched={formik.touched}
        >
  
        <div>
 
        <Typography variant="h2" sx={{ fontSize:20,fontFamily: 'Roboto Slab',fontWeight:'500'  }} m={2}  >Personal Information</Typography>
        <Typography  sx={{ color: 'text.secondary',fontSize:12,fontFamily: 'Roboto Slab',fontWeight:'400'  }} m={3} mt={0}  >
        Please provide your persanal details so we can get to know you better
        </Typography>



       <Stack spacing={4}
        direction={{ xs: 'column', sm: 'row' }}
        useFlexGap 
        flexWrap="wrap"
        mb={4} 
        justifyContent="center"
        alignItems="center"
        >

{step1Item.map((item) => (
  <Field
    key={item.name}
    name={item.name}
    type={item.type}
    as={TextField}
    label={item.label}
    error={formik.touched[item.name] && Boolean(formik.errors[item.name])}
    helperText={formik.touched[item.name] && formik.errors[item.name]}
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          {item.icon}
        </InputAdornment>
      ),
    }}
    sx={{
      width: 200,
      '& .MuiInputBase-input': {
        fontSize: '13px',
        height: 5,
      },
    }}
  />
))}

 </Stack>

         </div>
         <div >
         <Typography variant="h2" sx={{ fontSize:20,fontFamily: 'Roboto Slab',fontWeight:'500'  }} m={2}  >Skill Level</Typography>
        <Typography  sx={{ color: 'text.secondary',fontSize:12,fontFamily: 'Roboto Slab',fontWeight:'400'  }} m={3} mt={0}  >
        Please tell us about your skill in frontend developer
        </Typography>

            
            <RadioGroup
            name="picked"
            aria-labelledby="my-radio-group"
            value={formik.values.picked}
            
            >
            <Stack spacing={3} 
            direction={{ xs: 'column', sm: 'row' }}
            useFlexGap 
            flexWrap="wrap"
            mb={4} 
            justifyContent="center"
            alignItems="center"
            >

{step2Item.map((item)=>(
  <Box 
   key={item.value}
    sx={{ 
        px:1, 
        pb:2.5,
        border: '1px solid #cccccc',  
        borderRadius: 2, 
        width: 200, 
        height:19,
        '&:hover': {
         border: '1px solid #1976d2',  

        },


        }}>

            <FormControlLabel
                value={item.value}
                control={<Field type="radio" name="picked" value={item.value} as={Radio } />}
                label={item.label}
                
            /> 
        </Box>

))}
            
            <Typography variant="body2" color="error">

            <ErrorMessage name="picked" />

            </Typography>
            </Stack>
        </RadioGroup>
         </div>

         <div >
         <Typography variant="h2" sx={{ fontSize:20,fontFamily: 'Roboto Slab',fontWeight:'500'  }} m={2}  >Challenge Preference</Typography>
        <Typography  sx={{ color: 'text.secondary',fontSize:12,fontFamily: 'Roboto Slab',fontWeight:'400'  }} m={3} mt={0}  >
        Please tell us which frontend challenges you would like to participate in
        </Typography>

         <RadioGroup
            name="checked"
            aria-labelledby="my-radio-group"
            value={formik.values.checked}
            >

<Stack spacing={3} 
    direction={{ xs: 'column', sm: 'row' }}
    useFlexGap 
    flexWrap="wrap"
    mb={4} 
    justifyContent="center"
    alignItems="center"
    >

{step3Item.map((item)=>(
  <Box 
  key={item.value}
    sx={{ 
        px:1, 
        pb:2.5,
        border: '1px solid #cccccc',  
        borderRadius: 2, 
        width: 200, 
        height:19,
        '&:hover': {
         border: '1px solid #1976d2',  

        },


        }}>

            <FormControlLabel
                value={item.value}
                control={<Field type="radio" name="checked" value={item.value} as={Radio } />}
                label={item.value}
                
            /> 
        </Box>

))}
   
            <Typography variant="body2" color="error">

            <ErrorMessage name="checked" />

            </Typography>
            </Stack>
        </RadioGroup>

         </div>

         <div>
         <ReviewPages formValues={formValues}/>
         </div>

         <div>
         <Stack
         direction="column"
         justifyContent="center"
         alignItems="center"
        //  spacing={4}

         >
            <BeenhereIcon sx={{fontSize:150,margin:5,color:"#1976d2"}}/>
            <Typography sx={{fontSize:20 ,fontWeight:600}} mb={1} >Congratulations!</Typography>
            <Typography sx={{color: 'text.secondary',fontSize:15,textAlign:'center'}} mb={2}   >
Your profile has been created and you are now ready to start participating in 
challenges that match your intersts and coding experience level          
</Typography>

</Stack>
         </div>

        </FormikSteps>

      </Form>
      </CardContent>
      </Card>

                )}
        
      </Formik>

      );


}
