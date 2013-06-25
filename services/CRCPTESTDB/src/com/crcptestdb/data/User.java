
package com.crcptestdb.data;

import java.util.Date;


/**
 *  CRCPTESTDB.User
 *  06/24/2013 11:41:12
 * 
 */
public class User {

    private String usrId;
    private Role role;
    private String grpCd;
    private String usrNm;
    private String usrNmKana;
    private String passwd;
    private String loginFukaFlg;
    private String selfAdminCdUsr;
    private String delFlg;
    private Date finUpdYmdhms;
    private String finUpdUserId;

    public String getUsrId() {
        return usrId;
    }

    public void setUsrId(String usrId) {
        this.usrId = usrId;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public String getGrpCd() {
        return grpCd;
    }

    public void setGrpCd(String grpCd) {
        this.grpCd = grpCd;
    }

    public String getUsrNm() {
        return usrNm;
    }

    public void setUsrNm(String usrNm) {
        this.usrNm = usrNm;
    }

    public String getUsrNmKana() {
        return usrNmKana;
    }

    public void setUsrNmKana(String usrNmKana) {
        this.usrNmKana = usrNmKana;
    }

    public String getPasswd() {
        return passwd;
    }

    public void setPasswd(String passwd) {
        this.passwd = passwd;
    }

    public String getLoginFukaFlg() {
        return loginFukaFlg;
    }

    public void setLoginFukaFlg(String loginFukaFlg) {
        this.loginFukaFlg = loginFukaFlg;
    }

    public String getSelfAdminCdUsr() {
        return selfAdminCdUsr;
    }

    public void setSelfAdminCdUsr(String selfAdminCdUsr) {
        this.selfAdminCdUsr = selfAdminCdUsr;
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

}
