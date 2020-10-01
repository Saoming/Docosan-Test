import React, { useEffect, useState } from "react"
import styled from '@emotion/styled'
import doctorData from "../json/data.json"
import List from "../common/list"
import { GrClose } from "react-icons/gr"
import { jsx } from '@emotion/core'

const Menu = () => {
        // my unrefined code 
        const [ListData, setListData] = useState([]);
        const [sortType, setSortType] = useState('distance');

        useEffect(() => {
            const sortArray = type => {
              const options = {
                distance: 'distance',
                rating: 'rating',
              };
              let vietnamese = 'vi';
              let english = 'en';
              let french = 'fr';

              const sortProperty = options[type];
              const sorted = [...doctorData].sort((a, b) => a[sortProperty] - b[sortProperty] );
              const sortedByRating = [...doctorData].sort((a, b) => b[sortProperty] - a[sortProperty]);
              const sortedByLanguageVietnamese = [...doctorData].filter(doctor => doctor.language.includes(vietnamese)).sort((a, b) => a[sortProperty] - b[sortProperty]);
              const sortedByLanguageEnglish = [...doctorData].filter(doctor => doctor.language.includes(english)).sort((a, b) => a[sortProperty] - b[sortProperty]);
              const sortedByLanguageFrench  = [...doctorData].filter(doctor => doctor.language.includes(french)).sort((a, b) => a[sortProperty] - b[sortProperty]);
              if(sortType == 'rating') return setListData(sortedByRating);
              if(sortType == 'vi') return setListData(sortedByLanguageVietnamese);
              if(sortType == 'en') return setListData(sortedByLanguageEnglish);
              if(sortType == 'fr') return setListData(sortedByLanguageFrench);

              setListData(sorted);
            };

            sortArray(sortType); 
           
          }, [ sortType]);

          
        return (
            <MenuContainer>
                <SubContainer>
                    <MenuName>
                        Arranged By
                    </MenuName>
                    <SelectButton primary onChange={(e) => setSortType(e.target.value)}>
                        <Option value="distance"> Nearest Distance</Option>
                        <Option value="rating"> Best Review </Option>
                    </SelectButton>
                    <MenuName>
                        Filter By
                    </MenuName>
                    <SelectButton id="languageSwitcher" onChange={(e) => setSortType(e.target.value)}>
                        <Option>Select Language</Option>
                        <Option value="vi">Vietnamese   </Option>
                        <Option value="en">English      </Option>
                        <Option value="fr">French       </Option>
                    </SelectButton>
                </SubContainer >
                {ListData.map(ListData => {
                     return <List key={ListData.id} 
                                  name={ListData.display_name} 
                                  distance={ListData.distance} 
                                  rating={ListData.rating} 
                                  language={ListData.language}
                                  imgUrl={ListData.avatar}
                                  clinicName={ListData.clinic_name}
                                  clinicAddress={ListData.clinic_address}
                                  specialties={ListData.specialty}
                            />
                })}
            </MenuContainer>
        );
}

export default Menu

const MenuContainer = styled.div`

`;
const SubContainer = styled.div`
    margin-bottom: 1.5rem;
`;

const MenuName = styled.span`
    margin-right: 0.75rem;
`;

const SelectButton = styled.select`a
    appearance: ${props => props.active ? 'auto' : 'none'};
    background: ${props => props.primary ? '#4AC0A4' : 'transparent'};
    color:      ${props => props.primary ? '#fff' : '#000'};
    border:     ${props => props.primary ? '1px solid #4AC0A4' : '1px solid #000'};

    margin-right: 0.75rem;
    border-radius: 10px;
    padding: 10px;
    appearance: none;

`;

const Option = styled.option`
    
`;