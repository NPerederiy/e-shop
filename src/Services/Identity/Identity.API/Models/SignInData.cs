namespace Identity.API.Models
{
    public class SignInData
    {
        /// <summary>
        /// User email.
        /// </summary>
        public string Email { get; set; }

        /// <summary>
        /// Password hash.
        /// </summary>
        public string Password { get; set; }
    }
}
