
package com.crcptestdb.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  CRCPTESTDB.Role
 *  06/24/2013 11:41:12
 * 
 */
public class Role {

    private String roleCd;
    private String roleNm;
    private Short dispOdr;
    private String biko;
    private String delFlg;
    private Date finUpdYmdhms;
    private String finUpdUserId;
    private String finUpdPrgId;
    private Set<com.crcptestdb.data.User> users = new HashSet<com.crcptestdb.data.User>();

    public String getRoleCd() {
        return roleCd;
    }

    public void setRoleCd(String roleCd) {
        this.roleCd = roleCd;
    }

    public String getRoleNm() {
        return roleNm;
    }

    public void setRoleNm(String roleNm) {
        this.roleNm = roleNm;
    }

    public Short getDispOdr() {
        return dispOdr;
    }

    public void setDispOdr(Short dispOdr) {
        this.dispOdr = dispOdr;
    }

    public String getBiko() {
        return biko;
    }

    public void setBiko(String biko) {
        this.biko = biko;
    }

    public String getDelFlg() {
        return delFlg;
    }

    public void setDelFlg(String delFlg) {
        this.delFlg = delFlg;
    }

    public Date getFinUpdYmdhms() {
        return finUpdYmdhms;
    }

    public void setFinUpdYmdhms(Date finUpdYmdhms) {
        this.finUpdYmdhms = finUpdYmdhms;
    }

    public String getFinUpdUserId() {
        return finUpdUserId;
    }

    public void setFinUpdUserId(String finUpdUserId) {
        this.finUpdUserId = finUpdUserId;
    }

    public String getFinUpdPrgId() {
        return finUpdPrgId;
    }

    public void setFinUpdPrgId(String finUpdPrgId) {
        this.finUpdPrgId = finUpdPrgId;
    }

    public Set<com.crcptestdb.data.User> getUsers() {
        return users;
    }

    public void setUsers(Set<com.crcptestdb.data.User> users) {
        this.users = users;
    }

}
