namespace Identity.API.Models
{
    public class SignUpData
    {
        /// <summary>
        /// User first name.
        /// </summary>
        public string FirstName { get; set; }

        /// <summary>
        /// User last name.
        /// </summary>
        public string LastName { get; set; }

        /// <summary>
        /// User email. Used for sign in.
        /// </summary>
        public string Email { get; set; }

        /// <summary>
        /// Password hash.
        /// </summary>
        public string Password { get; set; }

        /// <summary>
        /// Determines if the user is subscribed to the newsletter.
        /// </summary>
        public bool IsSubscribed { get; set; }
    }
}
