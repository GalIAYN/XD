"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Users,
  Trophy,
  Briefcase,
  Gift,
  Code,
  Calendar,
  Megaphone,
  Settings,
  Mountain,
  GamepadIcon,
  Presentation,
  QrCode,
  Target,
  Heart,
} from "lucide-react"

export default function XDTICWebsite() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">TIC</span>
              </div>
              <span className="font-bold text-xl">西电腾讯创新俱乐部</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">
                关于TIC
              </a>
              <a href="#departments" className="text-gray-600 hover:text-blue-600 transition-colors">
                部门介绍
              </a>
              <a href="#activities" className="text-gray-600 hover:text-blue-600 transition-colors">
                活动介绍
              </a>
              <a href="#join" className="text-gray-600 hover:text-blue-600 transition-colors">
                加入我们
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              成立于2007年 · 连续15年优秀俱乐部
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              西电腾讯创新俱乐部
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              孵化优秀项目，输出精品活动
              <br />
              打造"模拟互联网企业工作系统"的校园社团
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                <Users className="mr-2 h-5 w-5" />
                立即加入
              </Button>
              <Button size="lg" variant="outline">
                了解更多
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What is TIC Section */}
      <section id="about" className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">什么是TIC？</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              腾讯高校创新俱乐部为加强创新人才生态环境建设并积极推动国家人才教育改革，
              自2006年起与20余所高校合作成立，以"互联网技术和产品"为核心定位。
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Trophy className="h-12 w-12 mx-auto text-blue-600 mb-2" />
                <CardTitle className="text-lg">专业培训</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">专业技术及软技能培训</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Briefcase className="h-12 w-12 mx-auto text-purple-600 mb-2" />
                <CardTitle className="text-lg">人才项目</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">腾讯丰富人才培养项目</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Target className="h-12 w-12 mx-auto text-green-600 mb-2" />
                <CardTitle className="text-lg">招聘信息</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">腾讯一手校园招聘信息</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Gift className="h-12 w-12 mx-auto text-pink-600 mb-2" />
                <CardTitle className="text-lg">精美礼品</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">腾讯海量周边定制礼品</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-0">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold mb-4">关于我们</CardTitle>
                <CardDescription className="text-lg">西电腾讯创新俱乐部（XDTIC）</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">2007</div>
                    <div className="text-sm text-gray-600">成立年份</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-600 mb-2">1700+</div>
                    <div className="text-sm text-gray-600">累计成员</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600 mb-2">15年</div>
                    <div className="text-sm text-gray-600">连续优秀俱乐部</div>
                  </div>
                </div>
                <Separator />
                <p className="text-gray-700 leading-relaxed">
                  西电腾讯创新俱乐部成立于2007年，是西安电子科技大学与腾讯联合创办的学生技术创新社团，
                  隶属于腾讯TEG技术工程事业群下的腾讯高校合作。目前拥有以研究生为核心的南、北校区两个分部，
                  是西电最具影响力的学生技术社团之一。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section id="departments" className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">部门介绍</h2>
            <p className="text-gray-600">四大核心部门，各司其职，协同发展</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Code className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">技术部</CardTitle>
                </div>
                <CardDescription>俱乐部极客之旅、技术分享、提高个人能力</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  技术部在西电TIC中作为一个前锋执行者，扮演者不可或缺的角色。
                  如果你对ACM算法、前端架构、后端开发、编程语言等感兴趣，我们热烈欢迎你的到来。
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">ACM算法</Badge>
                  <Badge variant="secondary">前端架构</Badge>
                  <Badge variant="secondary">后端开发</Badge>
                  <Badge variant="secondary">编程语言</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Calendar className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-xl">活动部</CardTitle>
                </div>
                <CardDescription>俱乐部最热闹的地方、负责活动前期策划和后期运营</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  活动策划统筹腾讯相关校园活动、社团内部出游团建、头脑风暴会、技术沙龙会等活动。
                  在这里，你可以提高个人策划组织能力，以及收获各种高效沟通的技能。
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">活动策划</Badge>
                  <Badge variant="secondary">团建组织</Badge>
                  <Badge variant="secondary">沟通协调</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Megaphone className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl">宣传部</CardTitle>
                </div>
                <CardDescription>俱乐部最亮的窗、负责设计海报、运营官方账号、活动宣发总结</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  宣传部负责俱乐部内的各项宣发活动，主要负责西电TIC的运营和文案的撰写，
                  以及海报、视频的制作。培养艺术感觉和美学修养、锻炼沟通与合作的能力。
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">平面设计</Badge>
                  <Badge variant="secondary">文案撰写</Badge>
                  <Badge variant="secondary">视频制作</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <Settings className="h-6 w-6 text-orange-600" />
                  </div>
                  <CardTitle className="text-xl">办公室</CardTitle>
                </div>
                <CardDescription>俱乐部管理、办公事务与指挥中枢</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  办公室是腾讯内部统筹协调的枢纽，是每次活动得到保障的后备力量，
                  是制度制定、内部建设的主要担当。努力使腾讯日常的运营更加规范、高效、便捷。
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">统筹协调</Badge>
                  <Badge variant="secondary">制度建设</Badge>
                  <Badge variant="secondary">财务管理</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section id="activities" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">活动介绍</h2>
            <p className="text-gray-600 mb-6">
              在日常工作和技术比赛上我们是齐心协力的团队，工作之余我们还是一个有爱的大家庭
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow bg-gradient-to-br from-pink-50 to-rose-50">
              <CardHeader>
                <Heart className="h-12 w-12 mx-auto text-pink-600 mb-2" />
                <CardTitle className="text-lg">迎新活动</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">有各种有趣的小游戏促进大家相互认识，还有许多精美礼品等你来抢</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow bg-gradient-to-br from-green-50 to-emerald-50">
              <CardHeader>
                <Mountain className="h-12 w-12 mx-auto text-green-600 mb-2" />
                <CardTitle className="text-lg">秦岭烤肉</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">自愿参加，可以在山上烤肉，爬山玩水，享受大自然的美好</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow bg-gradient-to-br from-blue-50 to-cyan-50">
              <CardHeader>
                <GamepadIcon className="h-12 w-12 mx-auto text-blue-600 mb-2" />
                <CardTitle className="text-lg">操场团建</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">可以和大家一起在操场，打桌游吃零食聊聊天，增进友谊</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow bg-gradient-to-br from-purple-50 to-violet-50">
              <CardHeader>
                <Presentation className="h-12 w-12 mx-auto text-purple-600 mb-2" />
                <CardTitle className="text-lg">技术讲座</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">不定期的会有技术部的学长给大家分享技术，交流经验</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 italic">这些之外，还有许多好玩的，有趣的，有意义的活动等你来发掘！</p>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section id="join" className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">如何报名</h2>
            <p className="text-xl mb-8 opacity-90">如果你想报名成为TIC的一份子，可以扫描下方二维码</p>

            <Card className="bg-white text-gray-900 max-w-md mx-auto">
              <CardHeader>
                <div className="w-32 h-32 mx-auto bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <img
                    src="/tic-qrcode.jpg"
                    alt="2025腾讯TIC招新群二维码"
                    className="w-full h-full object-contain"
                  />
                </div>
                <CardTitle>扫码加入新生Q群</CardTitle>
                <CardDescription>群号：215255328</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  <Users className="mr-2 h-4 w-4" />
                  立即加入TIC
                </Button>
              </CardContent>
            </Card>

            <p className="text-lg mt-8 font-semibold">西电TIC欢迎大家的到来！</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">TIC</span>
                </div>
                <span className="font-bold text-xl">西电腾讯创新俱乐部</span>
              </div>
              <p className="text-gray-400">孵化优秀项目，输出精品活动</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">联系我们</h3>
              <div className="space-y-2 text-gray-400">
                <p>西安电子科技大学</p>
                <p>南北校区均有分部</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">关于腾讯</h3>
              <div className="space-y-2 text-gray-400">
                <p>腾讯TEG技术工程事业群</p>
                <p>腾讯高校合作</p>
              </div>
            </div>
          </div>
          <Separator className="my-8 bg-gray-700" />
          <div className="text-center text-gray-400">
            <p>&copy; 2024 西电腾讯创新俱乐部. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
