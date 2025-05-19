import People from "../../domain/entity/People";

export default class PersonService {
    process(people: People[]){
        const filteredPeople = people.slice(1).filter((v) => {
        return v?.getName() && v?.getPhone() ;
        });
        console.log("Pessoas com dados válidos: ", filteredPeople.length);

        const mobilePhone = filteredPeople.map(((value, i) => {
            try {
                const onlyNumberPhone = value?.getPhone()?.replace(/[^0-9]/g,'');  
                
                if(onlyNumberPhone.length == 11) {
                    //73988675742
                    return {
                        name: value.getName(),
                        phone: `55${value.getPhone()}`
                    }
                } else if (onlyNumberPhone.length == 10) {
                    return {
                        name: value.getName(),
                        phone: `55${value.getPhone().slice(0, 2)}9${value.getPhone().slice(2)}`
                    }
                } else {
                    console.log(onlyNumberPhone.length)
                    return null
                }

            } catch (error) {
                console.log("Erro ao processar ", value, error);
                return null
            }
        }))

        const numbers = ['2', '3', '4', '5']
        const filteredData = mobilePhone.filter(value => {
            try {
                
                return value && !numbers.includes(value.phone[5]);
            } catch (error) {
                return null;
            }
        });

        return filteredData;
    }
}