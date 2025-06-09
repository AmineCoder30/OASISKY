import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Our Team", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Press", href: "#" },
      ],
    },
    {
      title: "Adventures",
      links: [
        { name: "Mountain Hiking", href: "#" },
        { name: "Rock Climbing", href: "#" },
        { name: "Kayaking", href: "#" },
        { name: "Camping", href: "#" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "FAQs", href: "#faq" },
        { name: "Contact Us", href: "#contact" },
        { name: "Booking", href: "#booking" },
        { name: "Safety", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Terms of Service", href: "#" },
        { name: "Privacy Policy", href: "#" },
        { name: "Cookie Policy", href: "#" },
        { name: "Accessibility", href: "#" },
      ],
    },
  ]

  return (
    <footer className="border-t bg-muted/40">
      <div className="container py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:gap-12">
          {footerLinks.map((group) => (
            <div key={group.title} className="space-y-4">
              <h3 className="text-sm font-medium uppercase tracking-wider">{group.title}</h3>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-2xl font-bold text-[#E8C27A]">
              OASISKY
            </Link>
          </div>

          <div className="text-center md:text-right text-sm text-muted-foreground">
            <p>&copy; {currentYear} Adventure Booking. All rights reserved.</p>
            <p className="mt-1">
              Designed with <span className="text-red-500">♥</span> for adventurers worldwide
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
