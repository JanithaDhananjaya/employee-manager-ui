import EditEmployee from "@/components/employees/EditEmployee";


function DefaultEmployee() {
    function saveEmployee(data) {
        console.log(data)
    }

    return (
        <EditEmployee onSaveEmployee={saveEmployee}/>
    );
}

export async function getStaticPaths() {
    return {
        fallback: false,
        paths: [
            {
                params: {
                    employeeId: 'e1'
                }
            },
            {
                params: {
                    employeeId: 'e2'
                }
            }
        ]
    }
}

export async function getStaticProps(context) {
    const employeeId = context.params.employeeId;
    console.log(employeeId)
    return {
        props: {
            employeeData: {
                first_name: "Henri",
                last_name: "Rodriguez",
                email: "Darrin_Rippin@gmail.com",
                number: "+94771277218",
                gender: "M",
                id: employeeId,
                photo: "https://randomuser.me/api/portraits/men/92.jpg"

            }
        }
    }
}

export default DefaultEmployee;