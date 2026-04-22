// as const assertion

// enum a seyt of fixed string leteral ek jaigai rakhe

// type UserRoles = "Admin" | "Editor" | "Viewer" ;

// enum UserRoles{
//     Admin = 'Admin',
//     Editor = "Editor",
//     Viewer = "Viewer"
// }

// javascript object define korbo
const UserRoles = {
  Admin: "ADMIN",
  Editor: "EDITOR",
  Viewer: "VIEWER",
} as const; // as const behind the scene eider4r ke const dichhe kintu tader kono new kichu assign hobe na

// readonly  Admin = 'Admin', // eta string na fixed literal type
// readonly    Editor = "Editor",
//  readonly    Viewer = "Viewer"

/*
1. typeof operator
 2. keyof operator

const user ={ 
    id:344, 
    name: "jalal mf khan "
}

typeOf User

 User {
        id:number,
        name:string
    }

    typeOf UserRoles

     {
     Admin = 'Admin', 
    Editor = "Editor",
   Viewer = "Viewer"
     }

     keyof  typeOf UserRoles
     keyof khara vabe kaj kore '
     "Admin" || "Editor" || "Viewer"


}

*/

const canEdit = (role: (typeof UserRoles)[keyof typeof UserRoles]) => { // type use korchi keyof and value use korchi typeof use kore 

  if (role === UserRoles.Admin || role === UserRoles.Editor) {
    return true;
  } else return false;
};

const isEditPermissible = canEdit(UserRoles.Admin);
console.log(isEditPermissible);
