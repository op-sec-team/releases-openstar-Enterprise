LJ'   -   9   L  �EVP_MD_CTX_create�  
34   ) -  '  B-  ' BU"�- 9,   B	  X�X�- 9 B-  B< : 
  X�- : - B)   X�- : B< X�+  -   ' ) 	B I ������: ERR_reason_error_stringERR_get_error_line_dataint[1]const char*[1] �  )
 -  9    )  +  B- 9'  B-  9    B)   X�- D -   D ����BIO_readchar[?]newBIO_ctrl� �-  9 B  X�+  - B I -  -  9B-  9B  X�+  - B I -  -  9B-  9 *  B X�+  - B I -  9   +	  B X�+  - B I -  9-  9B A   X�+  - B I -  -  9B X�-  9	  B X�+  - B I X�-  9
  B X�+  - B I -  B  X�,	 
 J -  9-	  9		B	 A   X	�+	  -
 B
 I	 -	 
 -  9B	 X	(�-	  9		B		  X
�+
  - B I
 -
 	 -  9B
-
  9

	  B

 X
�+
  - B I
 -
  9

 	 , )  , B

 X
�+
  - B I
 X	�-	  9		
  , )  , B		 X	�+	  -
 B
 I	 +	  -
  B
 	
  	 X
�,
  J
 
 	 J
 ���� PEM_write_bio_RSAPrivateKey"PEM_write_bio_PKCS8PrivateKeyEVP_PKEY_set1_RSAEVP_PKEY_freeEVP_PKEY_newPEM_write_bio_RSAPublicKeyPEM_write_bio_RSA_PUBKEYBIO_vfreeBIO_s_memBIO_newRSA_generate_key_exBN_set_wordBN_freeBN_newRSA_freeRSA_new���
 &�, 9   X�9 9-  9 X�- 9X�- 9+ X
�9  X�9- 9X�+  ' J - 9B- 9	 B  X�- D - 	 -
 9


B- 9	 
 B)	  	 X	�-	 D	 +	  9
 
 X�9


 - '  
B	 - 	 9
 B
  , 	 B

  X�- D - 
 - 9B- 9B  X�- D -  - 9B- 9 
 B	 X�- D - 9 +  B  X�- D -  - 9B9  X
�- 99B   X�+  ' J 9  X�9  X"�  X�- 9  X�- 9  B)   X�- D - 9 - )��- 9  X�- 9+  B)   X�- D - 9 B-	 5 == - '  B=!  X� X�+  ="  X� X�+  =#=$=%-
 D ���������	��mdis_pub_decrypt_ctx_encrypt_ctxbuf	size	pkey  EVP_PKEY_sizeRSA_PKCS1_PADDINGEVP_PKEY_CTX_ctrlEVP_PKEY_decrypt_initEVP_PKEY_encrypt_initdigestpaddingUnknown message digestEVP_get_digestbynamealgorithmEVP_PKEY_CTX_freeEVP_PKEY_CTX_newEVP_PKEY_set1_RSAEVP_PKEY_freeEVP_PKEY_newRSA_freeunsigned char[?]passwordBIO_putsBIO_vfreeBIO_newBIO_s_mem(public_key or private_key not foundPEM_read_bio_RSAPrivateKeyprivate_keyPEM_read_bio_RSAPublicKeyPEM_read_bio_RSA_PUBKEY
PKCS8key_typepublic_key �  (9    X�+  ' J -  ' B- 9 +    	 B)   X�- D 9 - 9   	 
 B)   X�- D -  : D ����bufEVP_PKEY_decryptsize_t [1]not inited for decrypt_decrypt_ctx�  (9    X�+  ' J -  ' B- 9 +    	 B)   X�- D 9 - 9   	 
 B)   X�- D -  : D ����bufEVP_PKEY_encryptsize_t [1]not inited for encrypt_encrypt_ctx� 
	 99    X�+  ' J -  B  X�- D -  - B- 9 9 B)   X�- D - 9   B)   X�- D 9 - ' B- 9 9  9	 B)   X�- D -  : D �������	pkeyEVP_SignFinalunsigned int[1]bufEVP_DigestUpdatemdEVP_DigestInitnot inited for signis_pub� 
 C9    X�+  ' J -  B  X�- D -  - B- 9 9 B)   X�- D - 9   B)   X�- D  9  X�9   X�- '  B-   	 B- 9  	 9
	 B)   X�- D + L �������	pkeyEVP_VerifyFinalunsigned char[?]buf	sizeEVP_DigestUpdatemdEVP_DigestInitnot inited for verifyis_pub�   )96   ' B 9 6  ' B999996	 9
6	 5
 5 =
5 =
5 =
9' B)  )  ) , 6 3 B  X�99X�993 3 3 =
3  =
3" =!
3$ =#
3& =%
3( ='
2  �L
  verify 	sign encrypt decrypt fucknew generate_rsa_keys  EVP_MD_CTX_destroyEVP_MD_CTX_createEVP_MD_CTX_freeEVP_MD_CTX_new 
pcall�typedef struct bio_st BIO;
typedef struct bio_method_st BIO_METHOD;
BIO_METHOD *BIO_s_mem(void);
BIO * BIO_new(BIO_METHOD *type);
int BIO_puts(BIO *bp, const char *buf);
void BIO_vfree(BIO *a);

typedef struct rsa_st RSA;
RSA *RSA_new(void);
void RSA_free(RSA *rsa);
typedef int pem_password_cb(char *buf, int size, int rwflag, void *userdata);
RSA * PEM_read_bio_RSAPrivateKey(BIO *bp, RSA **rsa, pem_password_cb *cb,
                                 void *u);
RSA * PEM_read_bio_RSAPublicKey(BIO *bp, RSA **rsa, pem_password_cb *cb,
                                void *u);
RSA * PEM_read_bio_RSA_PUBKEY(BIO *bp, RSA **rsa, pem_password_cb *cb,
                                void *u);

unsigned long ERR_get_error_line_data(const char **file, int *line,
                                      const char **data, int *flags);
const char * ERR_reason_error_string(unsigned long e);

typedef struct bignum_st BIGNUM;
BIGNUM *BN_new(void);
void BN_free(BIGNUM *a);
typedef unsigned long BN_ULONG;
int BN_set_word(BIGNUM *a, BN_ULONG w);
typedef struct bn_gencb_st BN_GENCB;
int RSA_generate_key_ex(RSA *rsa, int bits, BIGNUM *e, BN_GENCB *cb);

typedef struct evp_cipher_st EVP_CIPHER;
int PEM_write_bio_RSAPrivateKey(BIO *bp, RSA *x, const EVP_CIPHER *enc,
                                unsigned char *kstr, int klen,
                                pem_password_cb *cb, void *u);
int PEM_write_bio_RSAPublicKey(BIO *bp, RSA *x);
int PEM_write_bio_RSA_PUBKEY(BIO *bp, RSA *x);

long BIO_ctrl(BIO *bp, int cmd, long larg, void *parg);
int BIO_read(BIO *b, void *data, int len);

typedef struct evp_pkey_st EVP_PKEY;
typedef struct engine_st ENGINE;
typedef struct evp_pkey_ctx_st EVP_PKEY_CTX;

EVP_PKEY *EVP_PKEY_new(void);
void EVP_PKEY_free(EVP_PKEY *key);

EVP_PKEY_CTX *EVP_PKEY_CTX_new(EVP_PKEY *pkey, ENGINE *e);
void EVP_PKEY_CTX_free(EVP_PKEY_CTX *ctx);

int EVP_PKEY_CTX_ctrl(EVP_PKEY_CTX *ctx, int keytype, int optype,
                      int cmd, int p1, void *p2);

int EVP_PKEY_size(EVP_PKEY *pkey);

int EVP_PKEY_encrypt_init(EVP_PKEY_CTX *ctx);
int EVP_PKEY_encrypt(EVP_PKEY_CTX *ctx,
        unsigned char *out, size_t *outlen,
        const unsigned char *in, size_t inlen);

int EVP_PKEY_decrypt_init(EVP_PKEY_CTX *ctx);
int EVP_PKEY_decrypt(EVP_PKEY_CTX *ctx,
                     unsigned char *out, size_t *outlen,
                     const unsigned char *in, size_t inlen);

int EVP_PKEY_set1_RSA(EVP_PKEY *pkey, RSA *key);
int PEM_write_bio_PKCS8PrivateKey(BIO *bp, EVP_PKEY *x, const EVP_CIPHER *enc,
                                  char *kstr, int klen, pem_password_cb *cb,
                                  void *u);

void OpenSSL_add_all_digests(void);
typedef struct env_md_st EVP_MD;
typedef struct env_md_ctx_st EVP_MD_CTX;
const EVP_MD *EVP_get_digestbyname(const char *name);

/* EVP_MD_CTX methods for OpenSSL < 1.1.0 */
EVP_MD_CTX *EVP_MD_CTX_create(void);
void EVP_MD_CTX_destroy(EVP_MD_CTX *ctx);

/* EVP_MD_CTX methods for OpenSSL >= 1.1.0 */
EVP_MD_CTX *EVP_MD_CTX_new(void);
void EVP_MD_CTX_free(EVP_MD_CTX *ctx);

int EVP_DigestInit(EVP_MD_CTX *ctx, const EVP_MD *type);
int EVP_DigestUpdate(EVP_MD_CTX *ctx, const unsigned char *in, int inl);
int EVP_SignFinal(EVP_MD_CTX *ctx,unsigned char *sig,unsigned int *s,
                  EVP_PKEY *pkey);
int EVP_VerifyFinal(EVP_MD_CTX *ctx,unsigned char *sigbuf, unsigned int siglen,
                    EVP_PKEY *pkey);
int EVP_PKEY_set1_RSA(EVP_PKEY *e, RSA *r);

void ERR_set_error_data(char *data, int flags);
	cdefKEY_TYPE 
PKCS1PKCS#1
PKCS8PKCS#8PADDING RSA_PKCS1_OAEP_PADDINGRSA_NO_PADDINGRSA_SSLV23_PADDINGRSA_PKCS1_PADDING__index   _VERSION
1.0.1setmetatableconcat
tableCstring	copygcnewffi	bandbitrequire 