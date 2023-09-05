export interface User {
    user_id: number
    username: string
    password: string
    email: string
    created_at: string
    status: boolean
    role: Role,
    sub: string,
    userRole: string,
    access_token: string,
    refresh_token: string
}

export interface Role {
    role_id: number
    role_name: string
    role_description: string
    permission: Permission
}
  
export interface Permission {
    permission_id: number
    permission_name: string
    read: boolean
    write: boolean
    delete: boolean
    self_entity: boolean
    group_entity: boolean
    all_entities: boolean
}

export interface UserLogin {
    username: string
    password: string
}