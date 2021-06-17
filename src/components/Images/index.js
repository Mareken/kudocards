import React from 'react';

import useCard from '../../context/Card';

import { Container, Grid, Image } from './styles';

function Images () {
  const images = ['https://i.pinimg.com/originals/d3/02/e4/d302e4d06d9afae957b686985215270a.jpg', 'https://miro.medium.com/max/5000/1*Dpb3vjQtqb4D1nAU4RnRWA@2x.png', 'https://assets-global.website-files.com/5bcb5ee81fb2091a2ec550c7/5ec36523544c771830037859_wfh-drawkit-thumbnail.png', 'https://images.squarespace-cdn.com/content/v1/55b76e9ee4b03c58b8546b0c/1589791183324-DGUJ55BN5Z404VS53IYJ/ke17ZwdGBToddI8pDm48kPNVxVJLdWkBgZFpwRgU4hh7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UW8yRoWiND0JhqPxVq1xQ2lodFQL2xHM8rKB9x7NfbxiIy6s5IQUKHhVn5UapeK2tg/cover-davidsfonds1.3.jpg?format=2500w', 'https://image.freepik.com/free-vector/space-tour-illustration_153233-85.jpg', 'https://design4users.com/wp-content/uploads/2020/02/3d-illustration-workspace.jpg.pagespeed.ce.Fx4pca0q_y.jpg', 'https://images.squarespace-cdn.com/content/v1/5acb6f9fb27e3910337cdd37/1588499747331-SQOD997KAC1GTGN3A6IP/ke17ZwdGBToddI8pDm48kMMrhUZ3rQXTcnRxiSGi1G17gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmaUzSiviepfuOufnJa7SEDRKl7z_LUwe8cDB0iQ_YpMlSenNy3wuK8-Q9DCm8gcSo/IMG_1877.JPG?format=1500w', 'https://99designs-start-attachments.imgix.net/alchemy-pictures/2016%2F02%2F18%2F02%2F05%2F33%2Fe01439f8-9b72-425f-88b0-27a8ab7d7375%2F569955_LexLuchez_illustrations.png?auto=format&ch=Width%2CDPR&fm=png&w=450&h=450'];
  const { setCard } = useCard();

  const updateCardImage = (img) => {
    setCard(prevState => ({...prevState, image: img}));
  }

  return (
    <Container>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="squiggly-0">
            <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="0"/>
            <feDisplacementMap id="displacement" in="SourceGraphic" in2="noise" scale="6" />
          </filter>
          <filter id="squiggly-1">
            <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="1"/>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" />
          </filter>
          
          <filter id="squiggly-2">
            <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="2"/>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" />
          </filter>
          <filter id="squiggly-3">
            <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="3"/>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" />
          </filter>
          
          <filter id="squiggly-4">
            <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="4"/>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" />
          </filter>
        </defs> 
      </svg>
      <Grid>
        {
          images.map((img, index) => (
            <Image
              key={index}
              bg={img}
              onClick={() => updateCardImage(img)}
            />
          ))
        }
      </Grid>
    </Container>
  );
}

export default Images;