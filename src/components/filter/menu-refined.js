import React, { useMemo, useState } from "react"
import styled from '@emotion/styled'
import doctorData from "../json/data.json"
import List from "../common/list"

// thinking about what optimization for the code especially the filter .some
const Menu = () => {

const [items, setItems] = useState([]);
const [sortType, setSortType] = useState('distance');
const filterLanguages = ["vi", "en", "fr"];


const sortedItems = useMemo( (type) => {
    
    const options = {
        distance: 'distance',
        rating: 'rating',
    };

    const optionsProperty = options[type];
    
    if (sortType =='vi' || sortType =='en' || sortType =='fr') {
        const sortByLanguage = [...doctorData].filter((item) => 
        item.language.some( (lang) => filterLanguages.includes(lang))
        ).sort((a, b) => a[optionsProperty] - b[optionsProperty]);
        return setItems(sortByLanguage);
    } else if(sortType == 'rating') {
        const sortByRating = [...doctorData].sort((a, b) => b[optionsProperty] - a[optionsProperty]);
        return setItems(sortByRating);
    } else {
        const sortByDistance = [...doctorData].sort((a, b) => a[optionsProperty] - b[optionsProperty])
        return setItems[sortByDistance] ;
    }
    
 }, [sortType])
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
            <SelectButton defaultValue="disabled" onChange={(e) => setSortType(e.target.value)}>
                <Option value="disabled" disabled>Select Language</Option>
                <Option value="vi"> Vietnamese, &#xf00d; </Option>
                <Option value="en">English, &#xf00d;</Option>
                <Option value="fr">French, &#xf00d;</Option>
            </SelectButton>
        </SubContainer>
        {ListData.map(ListData => {
             return <List key={ListData.id} 
                          name={ListData.display_name} 
                          distance={ListData.distance} 
                          rating={ListData.rating} 
                          language={ListData.language}
                          imgUrl={ListData.avatar}
                          clinicName={ListData.clinic_name}
                          clinic_address={ListData.clinic_address}

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

const SelectButton = styled.select`
background: ${props => props.active ?  '#4AC0A4' : 'transparent' };
color:      ${props => props.active ? '#fff' : '#000'};
border:     ${props => props.active ? '1px solid #4AC0A4' : '1px solid #000'};
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